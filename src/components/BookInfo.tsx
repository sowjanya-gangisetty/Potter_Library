import type { Book } from "../types/book";

type BookInfoProps = {
  book: Book;
};

const BookInfo = ({ book }: BookInfoProps) =>{ 
  const { title, author, cover, dedication, pages, release_date, summary} =
    book.attributes;

  const formattedDate = release_date
    ? new Date(release_date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
     
      <div className="sm:w-48 w-full flex-shrink-0 bg-gray-100">
        {cover ? (
          <img
            src={cover}
            alt={`Cover of ${title}`}
            loading="lazy"
            className="w-full h-64 sm:h-full object-cover"
          />
        ) : (
          <div className="w-full h-64 sm:h-full flex items-center justify-center text-gray-300 text-5xl">
            
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-6 flex-1">
        <div>
          <h2 className="text-xl font-bold text-gray-900 ">{title}</h2>
        </div>

        {summary && (
          <p className="text-m text-gray-600 leading-relaxed">{summary}</p>
          
        )}

        {dedication && (
          <blockquote className="border-l-4 border-indigo-200 pl-3">
            <p className="text-s text-gray-800 italic">{dedication}</p>
          </blockquote>
        )}

        <div className="flex flex-wrap gap-4 mt-auto pt-3 border-t border-gray-100 text-s text-gray-500">
          {pages && (
            <span>
              Pages : <span className="font-medium text-gray-700">{pages}</span> 
            </span>
          )}
          {formattedDate && (
            <span>
             Release date : <span className="font-medium text-gray-700">{formattedDate}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
export default BookInfo
