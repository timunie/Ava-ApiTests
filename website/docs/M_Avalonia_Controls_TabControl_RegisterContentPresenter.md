import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# RegisterContentPresenter Method


Called when an <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a> is registered with the control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual bool RegisterContentPresenter(
	ContentPresenter presenter
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function RegisterContentPresenter ( 
	presenter As ContentPresenter
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract RegisterContentPresenter : 
        presenter : ContentPresenter -> bool 
override RegisterContentPresenter : 
        presenter : ContentPresenter -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/TabControl.cs#L234" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter</a></dt><dd>The presenter.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_TabControl">TabControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
