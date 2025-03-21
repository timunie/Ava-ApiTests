# Item Property


Gets or sets the item at the specified index.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public T this[
	int index
] { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Default Property Item ( 
	index As Integer
) As T
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Item : 'T with get, set
override Item : 'T with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaList.cs#L174" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index.</dd></dl>

#### Return Value
<a href="T_Avalonia_Collections_AvaloniaList_1">T</a>  
The item.

#### Implements
<a href="P_Avalonia_Collections_IAvaloniaList_1_Item">IAvaloniaList(T).Item(Int32)</a>  
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1.item" target="_blank" rel="noopener noreferrer">IList(T).Item(Int32)</a>  
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1.item" target="_blank" rel="noopener noreferrer">IReadOnlyList(T).Item(Int32)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T) Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

