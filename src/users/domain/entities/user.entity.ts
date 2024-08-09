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
}
