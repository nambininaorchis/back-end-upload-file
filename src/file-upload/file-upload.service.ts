import { Injectable } from '@nestjs/common';

@Injectable()
export class FileUploadService {
  handleFileUpload(file: Express.Multer.File) {
    return {
      message: 'File uploaded successfully',
      filePath: file.path,
    };
  }

  handleMultipleFileUpload(files: Express.Multer.File[]) {
    const fileDetails = files.map((file) => ({
      message: 'File uploaded successfully',
      filePath: file.path,
      originalName: file.originalname,
    }));

    return { files: fileDetails };
  }
}
