// import { setActiveCourses, setIsModalVisible } from '@features/activeEntitiesSlice'
// import { useMutation } from '@tanstack/react-query'
// import { Input, message, Modal, Typography } from 'antd'
// import React, { useCallback, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { AppDispatch, RootState } from 'src/redux/store'
// import apiService from '@services/api-service'
// import ActiveCourseTags from '@components/molecules/ActiveCourseTags'
// import SearchUI from '../SearchUI'
// import { addCourseGroup } from '@features/instituteSlice'

// const { Title } = Typography;


// const AddCourseGroupModal = () => {
//   const modal = useSelector((state: RootState) => state.activeEntities.modal)
//   const { open } = modal
//   const dispatch: AppDispatch = useDispatch()
//   const [courseGroupDescription, setCourseGroupDescription] = useState<string>('')
//   const activeCourses = useSelector((state: RootState) => state.activeEntities.activeCourses)

//   // Form field answers
//   const [courseGroupName, setCourseGroupName] = useState<string>('')
//   const currentUser = useSelector((state: RootState) => state.persisted.user.value)
//   const { mutate: mutateCreateCourseGroup } = useMutation(
//     async (
//       variables: { name: string, allowedCourseIds:string[], description:string}
//     ) =>
//       await apiService.createCourseGroup(
//         { ...variables, instituteId: process.env.NEXT_PUBLIC_INSTITUTE_ID }, currentUser.accessToken),
//     {
//     onSuccess: (data) => {
//         message.success('Course group created successfully')
//         dispatch(addCourseGroup(data))
//       }
//     }
//   )


//   const handleOk = useCallback(async () => {
//     dispatch(setIsModalVisible({ open: false }))
//     try {
//       await mutateCreateCourseGroup({
//         name: courseGroupName,
//         allowedCourseIds: activeCourses.map((ac: {
//           courseId: string,
//           courseCode:string
//         }) => ac.courseId),
//         description: courseGroupDescription
//       })
//       setCourseGroupName('')
//     } catch (error) {
//       message.error(error.message)
//     } finally {
//       dispatch(setIsModalVisible({ open: false }))
//       dispatch(setActiveCourses([]))
//     }
//   },[courseGroupName, activeCourses, dispatch, courseGroupDescription, mutateCreateCourseGroup]);

//   const handleCancel = () => {
//     dispatch(setIsModalVisible({open:false}))
//   };

//   return (
//     <Modal
//         title="Add a course group"
//         visible={open}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         bodyStyle={{maxHeight: '60vh', overflowY: 'scroll'}}
//       >
//       <Title level={5}>Course group name</Title>
//       <Input
//         value={courseGroupName}
//         onChange={(e) => setCourseGroupName(e.target.value)}
//         placeholder="eg : Civil Engineering Honors"
//       />
//       <br /><br />
//       <Title level={5}>Course Group description</Title>
//       <Input
//         value={courseGroupDescription}
//         onChange={(e) => setCourseGroupDescription(e.target.value)}
//         placeholder="This course helps in understanding the fundamentals of solid mechanics"
//       />
//       <br />
//       <Title level={5}>Search and add courses to be part of this group</Title>
//       <ActiveCourseTags/>
//       <SearchUI/>
//     </Modal>
//   )
// }
// export default AddCourseGroupModal
export { }
