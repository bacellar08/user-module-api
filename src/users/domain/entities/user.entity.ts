export type UserProps = {

  name: string,
  email: string,
  password: string,
  createdAt?: Date
}

export class User {

  constructor(public readonly props: UserProps) {

    //Set date to now if none is provided.
    this.props.createdAt = this.props.createdAt ?? new Date();
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get createdAt() {
    return this.props.createdAt;
  }
}
