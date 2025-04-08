type editProjectReceivedDataType = {
  _id: string;
  basement: string;
  buildArea: string;
  category: string;
  height: string;
  landArea: string;
  projectCreationYear: string;
  projectDescription: string;
  projectImageLink: string;
  projectImageCaption: string;
  projectName: string;
  studentName: string;
  studioName: string;
  studioTeachers: string;
  typology: string;
  universityName: string;
  videoSrc: string;
  visibilityStatus: string;
  additionalFields: {
    fieldName: string;
    fieldDescription: string;
    _id: string;
    fieldImages: {
      caption: string;
      imageSrc: string;
      _id: string;
    }[];
  }[];
  __v: number;
};
