# InsertRange Method


Inserts multiple items at the specified index.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public virtual void InsertRange(
	int index,
	IEnumerable<T> items
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overridable Sub InsertRange ( 
	index As Integer,
	items As IEnumerable(Of T)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract InsertRange : 
        index : int * 
        items : IEnumerable<'T> -> unit 
override InsertRange : 
        index : int * 
        items : IEnumerable<'T> -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaList.cs#L345" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_Collections_AvaloniaList_1">T</a>)</dt><dd>The items.</dd></dl>

#### Implements
<a href="M_Avalonia_Collections_IAvaloniaList_1_InsertRange">IAvaloniaList(T).InsertRange(Int32, IEnumerable(T))</a>  


## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T) Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

