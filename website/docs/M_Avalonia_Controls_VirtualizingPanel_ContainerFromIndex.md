# ContainerFromIndex Method


Returns the container for the item at the specified index.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected abstract Control? ContainerFromIndex(
	int index
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected MustOverride Function ContainerFromIndex ( 
	index As Integer
) As Control
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ContainerFromIndex : 
        index : int -> Control 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/VirtualizingPanel.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index of the item to retrieve.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>  
The container for the item at the specified index within the item collection, if the item is realized; otherwise, null.Note for implementors: if the item at the specified index is an ItemIsOwnContainer item that has previously been realized, then the item should be returned even if it currently falls outside the realized viewport.

## See Also


#### Reference
<a href="T_Avalonia_Controls_VirtualizingPanel">VirtualizingPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
