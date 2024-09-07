interface IRegisterOwner {
  name: string;
  surname: string;
  gender: string;
  phone: string;
}

interface IRegisterAdminForm {
  name: string;
  surname: string;
  gender: string;
  phoneUser: string;
  password: string;
}

interface IRegisterContractorsForm {
  nameCompany: string;
  typeCompany: string;
  mainCity: string;
  phone: string;
  inn: string;
}

interface IRegisterContractors extends IRegisterAdminForm, IRegisterContractorsForm {}

export type { IRegisterOwner, IRegisterContractors, IRegisterAdminForm };
