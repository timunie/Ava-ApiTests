# ScrollIntoView Method


Scrolls the specified item into view.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected abstract Control? ScrollIntoView(
	int index
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected MustOverride Function ScrollIntoView ( 
	index As Integer
) As Control
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ScrollIntoView : 
        index : int -> Control 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/VirtualizingPanel.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The index of the item.</dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Control">Control</a>  
The element with the specified index, or null if the element could not be brought into view.

## See Also


#### Reference
<a href="T_Avalonia_Controls_VirtualizingPanel">VirtualizingPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

