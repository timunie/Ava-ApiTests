# SetBetweenShowDelay Method


Sets the number of milliseconds since the last tooltip closed during which the tooltip of *element* will open immediately.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void SetBetweenShowDelay(
	Control element,
	int value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Sub SetBetweenShowDelay ( 
	element As Control,
	value As Integer
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member SetBetweenShowDelay : 
        element : Control * 
        value : int -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ToolTip.cs#L271" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The control to get the property from.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The number of milliseconds to set, or a negative value to disable the behaviour.</dd></dl>

## Remarks
Setting a negative value disables the immediate opening behaviour. The tooltip of *element* will then always wait until <a href="F_Avalonia_Controls_ToolTip_ShowDelayProperty">ShowDelayProperty</a> elapses before showing.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ToolTip">ToolTip Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

