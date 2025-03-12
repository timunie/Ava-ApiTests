# IndexOf Method


Gets the index of the specified item in the collection.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public int IndexOf(
	T item
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function IndexOf ( 
	item As T
) As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract IndexOf : 
        item : 'T -> int 
override IndexOf : 
        item : 'T -> int 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaList.cs#L323" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Collections_AvaloniaList_1">T</a></dt><dd>The item.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  
The index of the item or -1 if the item is not contained in the collection.

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1.indexof" target="_blank" rel="noopener noreferrer">IList(T).IndexOf(T)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T) Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  

