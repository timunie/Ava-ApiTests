# OnClosing Method


Raises the <a href="E_Avalonia_Controls_Window_Closing">Closing</a> event.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnClosing(
	WindowClosingEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnClosing ( 
	e As WindowClosingEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnClosing : 
        e : WindowClosingEventArgs -> unit 
override OnClosing : 
        e : WindowClosingEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Window.cs#L1104" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_WindowClosingEventArgs">WindowClosingEventArgs</a></dt><dd>The event args.</dd></dl>A type that derives from <a href="T_Avalonia_Controls_Window">Window</a> may override OnClosing(WindowClosingEventArgs). The overridden method must call OnClosing(WindowClosingEventArgs) on the base class if the <a href="E_Avalonia_Controls_Window_Closing">Closing</a> event needs to be raised.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Window">Window Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

