import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from './file-upload.service';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles(
    @UploadedFiles() files: Express.Multer.File | Express.Multer.File[],
  ) {
    if (Array.isArray(files)) {
      return this.fileUploadService.handleMultipleFileUpload(files);
    } else {
      return this.fileUploadService.handleFileUpload(files);
    }
  }
}
