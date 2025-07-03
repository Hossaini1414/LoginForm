function ProfileCard({name , role, image}){
    return(
        <div className="bg-white border rounded-xl shadow p-10 text-center hover:shadow-lg hover:scale-105 transition">
            <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-blue-600"/>
            <h2 className="text-md md:text-xl mt-3 font-semibold">
                {name}
            </h2>
            <p className="text-gray-500">
                {role}
            </p>
        </div>
    );
}
export default ProfileCard;