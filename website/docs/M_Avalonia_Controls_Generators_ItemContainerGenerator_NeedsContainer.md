# NeedsContainer Method


Determines whether the specified item needs to be wrapped in a container control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool NeedsContainer(
	Object? item,
	int index,
	out Object?? recycleKey
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function NeedsContainer ( 
	item As Object,
	index As Integer,
	<OutAttribute> ByRef recycleKey As Object
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member NeedsContainer : 
        item : Object * 
        index : int * 
        recycleKey : Object byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Generators/ItemContainerGenerator.cs#L81" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The item to display.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index of the item.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>When the method returns, contains a key that can be used to locate a previously recycled container of the correct type, or null if the item cannot be recycled.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true if the item needs a container; otherwise false if the item can itself be used as a container.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Generators_ItemContainerGenerator">ItemContainerGenerator Class</a>  
<a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators Namespace</a>  

