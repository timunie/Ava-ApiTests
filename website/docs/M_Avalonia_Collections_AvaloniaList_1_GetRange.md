# GetRange Method


Gets a range of items from the collection.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IEnumerable<T> GetRange(
	int index,
	int count
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetRange ( 
	index As Integer,
	count As Integer
) As IEnumerable(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetRange : 
        index : int * 
        count : int -> IEnumerable<'T> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaList.cs#L311" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The zero-based <a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T)</a> index at which the range starts.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The number of elements in the range.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_Collections_AvaloniaList_1">T</a>)

## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T) Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

