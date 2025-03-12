# CreateContainer Method


Creates a new container control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Control CreateContainer(
	Object? item,
	int index,
	Object? recycleKey
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function CreateContainer ( 
	item As Object,
	index As Integer,
	recycleKey As Object
) As Control
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member CreateContainer : 
        item : Object * 
        index : int * 
        recycleKey : Object -> Control 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Generators/ItemContainerGenerator.cs#L104" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The item to display.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index of the item.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The recycle key returned from <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_NeedsContainer">NeedsContainer(Object, Int32, Object)</a></dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>  
The newly created container control.Before calling this method, <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_NeedsContainer">NeedsContainer(Object, Int32, Object)</a> should be called to determine whether the item itself should be used as a container. After calling this method, <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_PrepareItemContainer">PrepareItemContainer(Control, Object, Int32)</a> must be called to prepare the container to display the specified item. If the panel supports recycling then the returned recycle key should be stored alongside the container and when container becomes eligible for recycling the container should be placed in a recycle pool using this key. If the returned recycle key is null then the container cannot be recycled.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Generators_ItemContainerGenerator">ItemContainerGenerator Class</a>  
<a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators Namespace</a>  

