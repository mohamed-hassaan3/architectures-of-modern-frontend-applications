"use client"
import {
  getUsers,
  selectUserError,
  selectUserLoading,
  selectUsersData,
} from "@/lib/redux/features/users/usersSlice";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/redux/hooks";
import { useEffect } from "react";

const Users = () => {
  const usersLoading = useAppSelector(selectUserLoading);
  const usersError = useAppSelector(selectUserError);
  const usersData = useAppStore(selectUsersData);
  // console.log("usersData", usersData)
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [])
  return (
    <article className="border h-[500] w-[700] p-4 flex flex-col m-auto">
      <h3 className="font-semibold underline text-center underline-offset-6">
        Users Component
      </h3>
      <section></section>
    </article>
  );
};

export default Users;
