# ContainerFromIndex Method


Returns the container for the item at the specified index.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Control? ContainerFromIndex(
	int index
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ContainerFromIndex ( 
	index As Integer
) As Control
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ContainerFromIndex : 
        index : int -> Control 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ItemsControl.cs#L257" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index of the item to retrieve.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>  
The container for the item at the specified index within the item collection, if the item has a container; otherwise, null.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ItemsControl">ItemsControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

