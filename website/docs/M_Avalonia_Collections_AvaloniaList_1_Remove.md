# Remove Method


Removes an item from the collection.



## Definition
**Namespace:** <a href="N_Avalonia_Collections">Avalonia.Collections</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public virtual bool Remove(
	T item
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overridable Function Remove ( 
	item As T
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Remove : 
        item : 'T -> bool 
override Remove : 
        item : 'T -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Collections/AvaloniaList.cs#L513" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Collections_AvaloniaList_1">T</a></dt><dd>The item.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the item was found and removed, otherwise false.

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1.remove" target="_blank" rel="noopener noreferrer">ICollection(T).Remove(T)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Collections_AvaloniaList_1">AvaloniaList(T) Class</a>  
<a href="N_Avalonia_Collections">Avalonia.Collections Namespace</a>  
