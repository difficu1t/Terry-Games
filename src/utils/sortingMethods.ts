import { fields } from "@/common/enums/fields";
import { IBoardGame } from "@/common/types/boardGame";
import { SortFields } from "@/common/types/sortFields";

export function orderSort (
  category: string,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
  sortedList: IBoardGame[],
  setSortedList: React.Dispatch<React.SetStateAction<IBoardGame[]>>) {
    if(category === '#'){
      const reverseArray = sortedList.slice();
      setSortedList(reverseArray.reverse());
    }
    setCategory('#');
}

export function titleSort (
  category: string,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
  sortedList: IBoardGame[],
  setSortedList: React.Dispatch<React.SetStateAction<IBoardGame[]>>,
  isSorted: SortFields,
  setIsSorted: React.Dispatch<React.SetStateAction<SortFields>>) {
    if(category === 'title'){
      const sortedArray = sortedList.slice();
      sortedArray.sort((a, b) => a.title.localeCompare(b.title));
      if(isSorted.isTitleSorted){
        sortedArray.reverse();
      }
      setIsSorted({...isSorted, isTitleSorted: !isSorted.isTitleSorted});
      setSortedList(sortedArray);
    }
    setCategory('title');
}

export function playersSort (
  category: string,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
  sortedList: IBoardGame[],
  setSortedList: React.Dispatch<React.SetStateAction<IBoardGame[]>>,
  isSorted: SortFields,
  setIsSorted: React.Dispatch<React.SetStateAction<SortFields>>) {
    if(category === 'players'){
      const sortedArray = sortedList.slice();
      sortedArray.sort((a, b) => a.minPlayers - b.minPlayers);
      if(isSorted.isPlayersSorted){
        sortedArray.reverse();
      }
      setIsSorted({...isSorted, isPlayersSorted: !isSorted.isPlayersSorted});
      setSortedList(sortedArray);
    }
    setCategory('players');
}

export function playedTimesSort (
  category: string,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
  sortedList: IBoardGame[],
  setSortedList: React.Dispatch<React.SetStateAction<IBoardGame[]>>,
  isSorted: SortFields,
  setIsSorted: React.Dispatch<React.SetStateAction<SortFields>>) {
    if(category === 'playedTimes'){
      const sortedArray = sortedList.slice();
      sortedArray.sort((a, b) => a.playedTimes - b.playedTimes);
      if(isSorted.isPlayedTimesSorted){
        sortedArray.reverse();
      }
      setIsSorted({...isSorted, isPlayedTimesSorted: !isSorted.isPlayedTimesSorted});
      setSortedList(sortedArray);
    }
    setCategory('playedTimes');
}

export function ratingSort (
  category: string,
  setCategory: React.Dispatch<React.SetStateAction<string>>,
  sortedList: IBoardGame[],
  setSortedList: React.Dispatch<React.SetStateAction<IBoardGame[]>>,
  isSorted: SortFields,
  setIsSorted: React.Dispatch<React.SetStateAction<SortFields>>) {
    if(category === 'rating'){
      const sortedArray = sortedList.slice();
      sortedArray.sort((a, b) => a.avgRating - b.avgRating);
      if(isSorted.isRatingSorted){
        sortedArray.reverse();
      }
      setIsSorted({...isSorted, isRatingSorted: !isSorted.isRatingSorted});
      setSortedList(sortedArray); 
    }
    setCategory('rating');
}

// export function universalSort (e: React.MouseEvent<HTMLAnchorElement>, 
//   category: string,
//   setCategory: React.Dispatch<React.SetStateAction<string>>,
//   selectedCategory: string,
//   sortedList: IBoardGame[],
//   isSorted: SortFields,
//   setIsSorted: React.Dispatch<React.SetStateAction<SortFields>>,
//   setSortedList: React.Dispatch<React.SetStateAction<IBoardGame[]>>) {
//   e.preventDefault();
//   if(category === selectedCategory){ 
//     const sortedArray = sortedList.slice();
//     switch(selectedCategory) {
//       case '#': 
//       setSortedList(sortedArray.reverse());
//         break;

//       case 'title':
//         sortedArray.sort((a, b) => a[fields.title].localeCompare(b[fields.title]));
//         if(isSorted.isTitleSorted){
//           sortedArray.reverse();
//         }
//         setIsSorted({...isSorted, isTitleSorted: !isSorted.isTitleSorted});
//         setSortedList(sortedArray);
//         break;
      
//       case 'players':
//         sortedArray.sort((a, b) => a[fields.players] - b[fields.players]);
//         if(isSorted.isPlayersSorted){
//           sortedArray.reverse();
//         }
//         setIsSorted({...isSorted, isPlayersSorted: !isSorted.isPlayersSorted});
//         setSortedList(sortedArray);
//         break;

//       case 'playedTimes':
//         sortedArray.sort((a, b) => a[fields.playedTimes] - b[fields.playedTimes]);
//         if(isSorted.isPlayedTimesSorted){
//           sortedArray.reverse();
//         }
//         setIsSorted({...isSorted, isPlayedTimesSorted: !isSorted.isPlayedTimesSorted});
//         setSortedList(sortedArray);
//         break;

//       case 'rating':
//         sortedArray.sort((a, b) => a[fields.rating] - b[fields.rating]);
//         if(isSorted.isRatingSorted){
//           sortedArray.reverse();
//         }
//         setIsSorted({...isSorted, isRatingSorted: !isSorted.isRatingSorted});
//         setSortedList(sortedArray); 
//         break;
//     }
//     setCategory('title');
//   }
//   setCategory(selectedCategory);
// }