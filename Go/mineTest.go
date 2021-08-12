package main
import "fmt"

func stuff() {
  anArray := make([]int, 2)
  anArray[0] = 0
  anArray[1] = 1
  appendedArray := append(anArray, 3, [2]int{4, 5})

  myMap := map[string]int{"Test": 1}
  myMap["Another"] = 2
}


func arrayAndMapArgs(a []int, b map[string]int) {
  fmt.Println(a, b)
}

func sameType(a, b int) int {
  return a + b
}

func differentTypes(a string, b int) (string, int) {
  return a, b
}

func main() {
    // fmt.Println(t("1", 2))
}

