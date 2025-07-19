function NoContent({ title, Icon }) {
  return (
    <div className="flex justify-center items-center flex-col gap-y-5 text-xs 2xl:text-3xl mx-auto border p-8 rounded-4xl 2xl:mt-12 border-gray-200">
      <Icon />
      <span>{title}</span>
    </div>
  );
}

export default NoContent;
