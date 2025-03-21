# Resized Event


Occurs when the window is resized.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<WindowResizedEventArgs> Resized
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event Resized As EventHandler(Of WindowResizedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Resized : IEvent<EventHandler<WindowResizedEventArgs>,
    WindowResizedEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/WindowBase.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_WindowResizedEventArgs">WindowResizedEventArgs</a>)

## Remarks
Although this event is similar to the <a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a> event, they are conceptually different: - Resized is a window-level event, fired when a resize notification arrives from the platform windowing subsystem. The event args contain details of the source of the resize event in the <a href="P_Avalonia_Controls_WindowResizedEventArgs_Reason">Reason</a> property. This event is raised before layout has been run on the window's content. - <a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a> is a layout-level event, fired when a layout pass completes on a control. <a href="E_Avalonia_Controls_Control_SizeChanged">SizeChanged</a> is present on all controls and is fired when the control's size changes for any reason, including a Resized event in the case of a Window.

## See Also


#### Reference
<a href="T_Avalonia_Controls_WindowBase">WindowBase Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

