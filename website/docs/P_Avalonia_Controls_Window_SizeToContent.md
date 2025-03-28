# SizeToContent Property


Gets or sets a value indicating how the window will size itself to fit its content.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public SizeToContent SizeToContent { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property SizeToContent As SizeToContent
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SizeToContent : SizeToContent with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Window.cs#L278" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_SizeToContent">SizeToContent</a>

## Remarks
If SizeToContent has a value other than <a href="T_Avalonia_Controls_SizeToContent">Manual</a>, SizeToContent is automatically set to <a href="T_Avalonia_Controls_SizeToContent">Manual</a> if a user resizes the window by using the resize grip or dragging the border. NOTE: Because of a limitation of X11, SizeToContent will be reset on X11 to <a href="T_Avalonia_Controls_SizeToContent">Manual</a> on any resize - including the resize that happens when the window is first shown. This is because X11 resize notifications are asynchronous and there is no way to know whether a resize came from the user or the layout system. To avoid this, consider setting <a href="P_Avalonia_Controls_Window_CanResize">CanResize</a> to false, which will disable user resizing of the window.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Window">Window Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

