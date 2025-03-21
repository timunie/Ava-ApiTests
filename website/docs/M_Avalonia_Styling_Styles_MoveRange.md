# MoveRange Method


Moves multiple items to a new index.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void MoveRange(
	int oldIndex,
	int count,
	int newIndex
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub MoveRange ( 
	oldIndex As Integer,
	count As Integer,
	newIndex As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract MoveRange : 
        oldIndex : int * 
        count : int * 
        newIndex : int -> unit 
override MoveRange : 
        oldIndex : int * 
        count : int * 
        newIndex : int -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/Styles.cs#L144" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The first index of the items to move.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The number of items to move.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index to move the items to.</dd></dl>

#### Implements
<a href="M_Avalonia_Collections_IAvaloniaList_1_MoveRange">IAvaloniaList(T).MoveRange(Int32, Int32, Int32)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Styling_Styles">Styles Class</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  

