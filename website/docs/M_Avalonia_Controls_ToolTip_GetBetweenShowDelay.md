# GetBetweenShowDelay Method


Gets the number of milliseconds since the last tooltip closed during which the tooltip of *element* will open immediately, or a negative value indicating that the tooltip will always wait for <a href="F_Avalonia_Controls_ToolTip_ShowDelayProperty">ShowDelayProperty</a> before opening.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static int GetBetweenShowDelay(
	Control element
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetBetweenShowDelay ( 
	element As Control
) As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetBetweenShowDelay : 
        element : Control -> int 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ToolTip.cs#L260" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The control to get the property from.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ToolTip">ToolTip Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

