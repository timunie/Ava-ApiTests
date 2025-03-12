# BringIntoViewOnFocusChange Property


Gets or sets a value that determines whether the <a href="T_Avalonia_Controls_ScrollViewer">ScrollViewer</a> uses a bring-into-view scroll behavior when an item in the view gets focus.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool BringIntoViewOnFocusChange { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property BringIntoViewOnFocusChange As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member BringIntoViewOnFocusChange : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ScrollViewer.cs#L206" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
true to use a behavior that brings focused items into view. false to use a behavior that focused items do not automatically scroll into view. The default is true.BringIntoViewOnFocusChange can either be set explicitly on a <a href="T_Avalonia_Controls_ScrollViewer">ScrollViewer</a>, or a the attached <code language="cs">ScrollViewer.BringIntoViewOnFocusChange</code> property can be set on an element that hosts a <a href="T_Avalonia_Controls_ScrollViewer">ScrollViewer</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ScrollViewer">ScrollViewer Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

