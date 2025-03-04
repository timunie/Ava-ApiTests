import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnDropDownClosing Method


Raises the <a href="E_Avalonia_Controls_AutoCompleteBox_DropDownClosing">DropDownClosing</a> event.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnDropDownClosing(
	CancelEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnDropDownClosing ( 
	e As CancelEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnDropDownClosing : 
        e : CancelEventArgs -> unit 
override OnDropDownClosing : 
        e : CancelEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/AutoCompleteBox/AutoCompleteBox.cs#L990" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.canceleventargs" target="_blank" rel="noopener noreferrer">CancelEventArgs</a></dt><dd>A CancelEventArgs that contains the event data.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
