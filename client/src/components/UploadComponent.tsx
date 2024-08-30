// src/UploadComponent.tsx
import {
  getDownloadURL,
  ref,
  StorageReference,
  uploadBytesResumable,
} from "firebase/storage";
import { ChangeEvent, useState } from "react";
import { storage } from "../firebaseConfig";

interface IProps {
  type: string;
  id?: number;
  url: string | null;
  setState: (value: string, type: string, id?: number) => void;
}

const UploadComponent = ({ type, id, url, setState }: IProps) => {
  const [progress, setProgress] = useState<number>(0);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  function bytesToMB(bytes: number): number {
    return bytes / (1024 * 1024);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log("files", e.target.files);
    if (!e.target.files) return;

    console.log("sdflkjdsf");

    const file = e.target.files[0];
    const fileType = file.type;
    const fileSize = file.size; // in bytes
    const fileSizeInMB = bytesToMB(fileSize);

    console.log("fileSize", fileSize);

    // Initialize info message
    let errorMessage = "";

    if (fileType.startsWith("image/")) {
      if (fileSizeInMB > 10) {
        errorMessage =
          "The video file exceeds the maximum allowed size of 10 MB. Please upload a smaller video.";
      }
    } else if (fileType.startsWith("video/")) {
      console.log("vidoe");
      // Handle video files
      const videoUrl = URL.createObjectURL(file);

      // Create a video element to load and get duration
      const videoElement = document.createElement("video");
      videoElement.preload = "metadata";
      videoElement.src = videoUrl;

      videoElement.addEventListener("loadedmetadata", () => {
        const duration = videoElement.duration; // in seconds
        console.log("video second", duration.toFixed(2));

        if (duration > 90) {
          errorMessage =
            "The video duration exceeds the maximum allowed length of 90 seconds.";
        } else if (fileSizeInMB > 10) {
          errorMessage =
            "The video file exceeds the maximum allowed size of 10 MB. Please upload a smaller video.";
        }

        // Clean up the URL object
        URL.revokeObjectURL(videoUrl);
      });
    } else {
      // Handle unsupported file types
      errorMessage = "Unsupported file type.";
      setUploading(false);
    }
    console.log("error", errorMessage);

    if (errorMessage) {
      console.log("error", errorMessage);
      return setError(errorMessage);
    } else {
      setUploading(true);
      const storageRef: StorageReference = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.error(error);
          setUploading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUploading(false);
            setProgress(0);
            setError("");
            setState(downloadURL, type, id);
            console.log("File available at", downloadURL);
          });
        }
      );
    }
  };
  return (
    <>
      {type === "logo" && (
        <div className="h-[154px] w-[140px] relative">
          <label
            htmlFor="logo"
            className="w-[140px] h-[140px] rounded bg-[#F6F6F7] flex items-center justify-center flex-col gap-1 hover:cursor-pointer border border-[#f6f6f7] transition-all hover:border-primary"
          >
            {error ? (
              <div className="absolute inset-0 w-full h-full flex items-center flex-col gap-2 justify-center">
                <span className="text-xs text-red-500">{error}</span>
              </div>
            ) : uploading ? (
              <div className="absolute inset-0 w-full h-full flex items-center flex-col gap-2 justify-center">
                <div className="w-[70%] bg-gray-200 h-2 rounded-full">
                  <div
                    style={{ width: progress ? `${progress}%` : 0 }}
                    className={`transition-all bg-primary h-2 rounded-full`}
                  ></div>
                </div>
                <span className="text-xs text-primary">{progress}%</span>
              </div>
            ) : url ? (
              <img className="w-full" src={url} alt="" />
            ) : (
              <>
                <img src="/images/icons/image.png" alt="" />
                <span className="text-primary font-medium text-xs">
                  Upload Image
                </span>
              </>
            )}

            <input
              type="file"
              onChange={handleChange}
              id="logo"
              className="hidden"
            />
          </label>

          <div className="absolute right-2 bottom-0 flex items-center gap-2">
            <button
              className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow"
              onClick={() => setState("", "logo", id)}
            >
              <img src="/images/icons/add.png" alt="" />
            </button>
            <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
              <img src="/images/icons/edit.png" alt="" />
            </button>
          </div>
        </div>
      )}

      {type === "video" && (
        <label htmlFor="video" className="h-[154px] relative">
          {error ? (
            <div className="absolute inset-0 w-full h-full flex items-center flex-col gap-2 justify-center">
              <span className="text-xs text-red-500">{error}</span>
            </div>
          ) : uploading ? (
            <div className="absolute bg-[#F6F6F7] rounded inset-0 w-full h-full flex items-center flex-col gap-2 justify-center">
              <div className="w-[70%] bg-gray-200 h-2 rounded-full">
                <div
                  style={{ width: progress ? `${progress}%` : 0 }}
                  className={`transition-all bg-primary h-2 rounded-full`}
                ></div>
              </div>
              <span className="text-xs text-primary">{progress}%</span>
            </div>
          ) : url ? (
            <video src={url} className="w-full" controls></video>
          ) : (
            <div className="h-[140px] rounded bg-[#F6F6F7] flex items-center justify-center flex-col gap-1 hover:cursor-pointer border border-[#f6f6f7] transition-all hover:border-primary">
              <img src="/images/icons/Play.png" alt="" />
              <span className="text-primary font-medium text-xs">
                Upload Video
              </span>
            </div>
          )}

          <input
            type="file"
            onChange={handleChange}
            id={`video`}
            className="hidden"
          />

          <div className="absolute right-2 bottom-0 flex items-center gap-2">
            <button
              className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow"
              onClick={() => setState("", "video", id)}
            >
              <img src="/images/icons/add.png" alt="" />
            </button>
            <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
              <img src="/images/icons/edit.png" alt="" />
            </button>
          </div>
        </label>
      )}

      {type === "image" && (
        <label htmlFor={`image-${id}`} className="h-[154px] relative">
          {error ? (
            <div className="absolute inset-0 w-full h-full flex items-center flex-col gap-2 justify-center">
              <span className="text-xs text-red-500">{error}</span>
            </div>
          ) : uploading ? (
            <div className="absolute bg-[#F6F6F7] rounded inset-0 w-full h-full flex items-center flex-col gap-2 justify-center">
              <div className="w-[70%] bg-gray-200 h-2 rounded-full">
                <div
                  style={{ width: progress ? `${progress}%` : 0 }}
                  className={`transition-all bg-primary h-2 rounded-full`}
                ></div>
              </div>
              <span className="text-xs text-primary">{progress}%</span>
            </div>
          ) : url ? (
            <img className="w-full h-full" src={url} alt="" />
          ) : (
            <>
              <div className="h-[140px] rounded bg-[#F6F6F7] flex items-center justify-center flex-col gap-1 hover:cursor-pointer border border-[#f6f6f7] transition-all hover:border-primary">
                <img src="/images/icons/image.png" alt="" />
                <span className="text-primary font-medium text-xs">
                  Upload Image
                </span>
              </div>
            </>
          )}

          <input
            type="file"
            onChange={handleChange}
            id={`image-${id}`}
            className="hidden"
          />

          <div className="absolute right-2 bottom-0 flex items-center gap-2">
            <button
              className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow"
              onClick={() => setState("", "image", id)}
            >
              <img src="/images/icons/add.png" alt="" />
            </button>
            <button className="flex items-center justify-center w-7 h-7 bg-white rounded border border-transparent transition-all hover:border-primary shadow">
              <img src="/images/icons/edit.png" alt="" />
            </button>
          </div>
        </label>
      )}
    </>
  );
};

export default UploadComponent;
