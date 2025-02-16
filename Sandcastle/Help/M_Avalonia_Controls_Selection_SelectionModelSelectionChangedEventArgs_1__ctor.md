---
title:SelectionModelSelectionChangedEventArgs&lt;T&gt; Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# SelectionModelSelectionChangedEventArgs&lt;T&gt; Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Selection_SelectionModelSelectionChangedEventArgs_1">SelectionModelSelectionChangedEventArgs(T)</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public SelectionModelSelectionChangedEventArgs(
	IReadOnlyList<int>? deselectedIndices = null,
	IReadOnlyList<int>? selectedIndices = null,
	IReadOnlyList<T>? deselectedItems = null,
	IReadOnlyList<T>? selectedItems = null
)
```
**VB**
``` VB
Public Sub New ( 
	Optional deselectedIndices As IReadOnlyList(Of Integer) = Nothing,
	Optional selectedIndices As IReadOnlyList(Of Integer) = Nothing,
	Optional deselectedItems As IReadOnlyList(Of T) = Nothing,
	Optional selectedItems As IReadOnlyList(Of T) = Nothing
)
```
**F#**
``` F#
new : 
        ?deselectedIndices : IReadOnlyList<int> * 
        ?selectedIndices : IReadOnlyList<int> * 
        ?deselectedItems : IReadOnlyList<'T> * 
        ?selectedItems : IReadOnlyList<'T> 
(* Defaults:
        let _deselectedIndices = defaultArg deselectedIndices null
        let _selectedIndices = defaultArg selectedIndices null
        let _deselectedItems = defaultArg deselectedItems null
        let _selectedItems = defaultArg selectedItems null
*)
-> SelectionModelSelectionChangedEventArgs
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Controls_Selection_SelectionModelSelectionChangedEventArgs_1">T</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Controls_Selection_SelectionModelSelectionChangedEventArgs_1">T</a>)  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Selection_SelectionModelSelectionChangedEventArgs_1">SelectionModelSelectionChangedEventArgs(T) Class</a>  
<a href="N_Avalonia_Controls_Selection">Avalonia.Controls.Selection Namespace</a>  
