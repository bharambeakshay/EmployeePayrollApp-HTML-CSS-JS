/**
 *  @class :  In EmployeePayRoll class we are assigning  and retrieving values of respective files
 */
class EmployeePayRoll {
    //we are adding this id to use it in the form by which we will update delete and find values
    get id() { return this._id; }
    set(id) {
        this._id = id;
    }

    get name() { return this._name; }
    set name(name) {
        //validating only name with min 3 letters and first letter caps is allowed  
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }

    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    /**
     * @function : toString() prints the respective data
     * @param { }: No parameters are needed 
     */

    toString() {
        //giving the type of date required
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        //if start date is not in the given datatype it will pass the value undefined to empdate
        const empDate = !this.startDate ? "undefined" :
            this.startDate;
        //here in return for start date we are passing empDate as value                
        return "id=" + this.id + ", name='" + this.name + ", gender='" + this.gender +
            ", profilePic='" + this.profilePic + ", department=" + this.department +
            ", salary=" + this.salary + ", startDate=" + empDate + ", note=" + this.note;
    }

    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }

    get department() { return this._department; }
    set department(department) {
        this._department = department;
    }

    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }

    get note() { return this._note; }
    set note(note) {
        this._note = note;
    }

    // date func will provide todays date
    get startDate() { return this._startDate; }
    set startDate(startDate) {
        let now = new Date();
        //if it is a future date it will throw error
        if (startDate > now) throw 'Start Date is a Future Date!';
        //abs return absolute value of a function
        let diff = Math.abs(now.getTime() - startDate.getTime());
        console.log(diff);
        //converting into proper day format of max 30 days
        if (diff / (1000 * 60 * 60 * 24) > 30)
            throw 'Start Date is beyond 30 Days!';
        this._startDate = startDate;
    }
}