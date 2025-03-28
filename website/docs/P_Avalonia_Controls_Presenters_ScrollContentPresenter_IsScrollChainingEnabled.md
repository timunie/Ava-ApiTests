# IsScrollChainingEnabled Property


Gets or sets if scroll chaining is enabled. The default value is true.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Presenters">Avalonia.Controls.Presenters</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool IsScrollChainingEnabled { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property IsScrollChainingEnabled As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member IsScrollChainingEnabled : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Presenters/ScrollContentPresenter.cs#L218" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## Remarks
After a user hits a scroll limit on an element that has been nested within another scrollable element, you can specify whether that parent element should continue the scrolling operation begun in its child element. This is called scroll chaining.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Presenters_ScrollContentPresenter">ScrollContentPresenter Class</a>  
<a href="N_Avalonia_Controls_Presenters">Avalonia.Controls.Presenters Namespace</a>  

