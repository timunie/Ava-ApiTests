# UpdateChild Method


Updates the <a href="P_Avalonia_Controls_Presenters_ContentPresenter_Child">Child</a> control based on the control's <a href="P_Avalonia_Controls_Presenters_ContentPresenter_Content">Content</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Presenters">Avalonia.Controls.Presenters</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void UpdateChild()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub UpdateChild
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member UpdateChild : unit -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Presenters/ContentPresenter.cs#L446" title="View the source code">View Source</a>

Usually the <a href="P_Avalonia_Controls_Presenters_ContentPresenter_Child">Child</a> control is created automatically when <a href="M_Avalonia_Controls_Presenters_ContentPresenter_ApplyTemplate">ApplyTemplate()</a> is called; however for this to happen, the control needs to be attached to a logical tree (if the control is not attached to the logical tree, it is reasonable to expect that the DataTemplates needed for the child are not yet available). This method forces the <a href="P_Avalonia_Controls_Presenters_ContentPresenter_Child">Child</a> control's creation at any point, and is particularly useful in unit tests.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter Class</a>  
<a href="N_Avalonia_Controls_Presenters">Avalonia.Controls.Presenters Namespace</a>  
