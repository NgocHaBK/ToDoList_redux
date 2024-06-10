import React, { useEffect } from "react";
import style from "./doctor_form.module.css";
export default function InputForm({ item, setItem, items, setItems }) {
  //   const inputUser = useRef(null);

  //   const handleSubmit = () => {
  //     console.log("hello")
  // };
  useEffect(() => {
    console.log("t doi ne");
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setItem((item) => {
      return { ...item, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item.id);
    //nếu id là "" thì dược xem là false. cho nên cần check xem nếu đối tượng item đã có id hay chưa => phân loại là được updated hay thêm mới, nếu đã có tức khác "" thì vào cập nhật tức if, còn ngược lại thì vào thêm mới tức vào else.
    if (item.id) {
      const _item = items.find((i) => i.id === item.id);// chỗ này sẽ trả về object tham chiếu đến ô nhớ của thằng được tìm thấy bằng
      Object.assign(_item, item);//nếu làm như này thì sẽ thay đổi luôn giá trị của thằng tại idx đó trong state items
      setItems([...items]);

      // let idx = items.findIndex((indiItem) => indiItem.id === item.id);
      // const updatedItems = [
      //   ...items.slice(0, idx),
      //   {
      //     ...items[idx],
      //     name: item.name,
      //     startDate: item.startDate,
      //     endDate: item.endDate,
      //     department: item.department,
      //     height: item.height,
      //   },
      //   ...items.slice(idx + 1),
      // ];
      // setItems(updatedItems);
      // console.log("cos id rooif");
      // setItems((preItems) => [...preItems, items[idx]]);
    } else {
      const id = new Date().getTime();
      
      // console.log(item);
      // console.log("bạn đang vào else");

      //làm như dưới đây thì không lo lắng item đã được cập nhật hay chưa.
      setItems((preItems) => [
        ...preItems,
       {...item,id},
      ]);
    }
    setItem({
      id: "",
      name: "",
      startDate: "",
      endDate: "",
      height: "",
      department: "",
    });
  };

  return (
    <div className={style.doctorform}>
      <div className={`${style.container} ${style.doctorform}`}>
        <header className={style.doctorform}>DOCTOR'S INFORMATION</header>

        <form onSubmit={handleSubmit}>
          <div className={`form first`}>
            <div className={`${style.detail} personal`}>
              <span className={style.title}>Information About The Doctor</span>

              <div className={style.fields}>
                {/* <div className={style[`input-field`]}>
                  <label htmlFor="">
                    ID <span>*</span>
                  </label>
                  <input
                    value={item.id || ""}
                    type="text"
                    name="id"
                    onChange={handleChange}
                    placeholder="Enter your ID:"
                    required
                    display
                  />
                </div> */}

                <div className={style[`input-field`]}>
                  <label htmlFor="">
                    Name <span>*</span>
                  </label>
                  <input
                    value={item.name || ""}
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="Enter your full name:"
                    required
                  />
                </div>

                <div className={style[`input-field`]}>
                  <label htmlFor="">
                    Date in <span>*</span>
                  </label>
                  <input
                    value={item.startDate || ""}
                    type="date"
                    name="startDate"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={style[`input-field`]}>
                  <label htmlFor="">
                    Date out <span>*</span>
                  </label>
                  <input
                    value={item.endDate || ""}
                    type="date"
                    name="endDate"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={style[`input-field`]}>
                  <label htmlFor="">
                    Your height <span>*</span>
                  </label>
                  <input
                    value={item.height || ""}
                    type="text"
                    name="height"
                    onChange={handleChange}
                    placeholder="Height: "
                    required
                  />
                </div>

                <div className={style[`input-field`]}>
                  <label htmlFor="">
                    Department <span>*</span>
                  </label>
                  <select name="department" onChange={handleChange} required>
                    <option value={item.department || ""}>Select</option>
                    <option value="Diagnose">Diagnose</option>
                    <option value="General Medicine">General Medicine</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Obstetrics and Gynecology">
                      Obstetrics and Gynecology
                    </option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Ophthalmology">Ophthalmology</option>
                    <option value="Otolaryngology">Otolaryngology</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Psychiatry">Psychiatry</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={style.button}>
            <button type="submit" className={style.summitBtn}>
              <span className={style[`summit-btn`]}>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
