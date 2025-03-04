import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnExpanding Method


Invoked just before the <a href="E_Avalonia_Controls_Expander_Expanding">Expanding</a> event.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnExpanding(
	CancelRoutedEventArgs eventArgs
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnExpanding ( 
	eventArgs As CancelRoutedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnExpanding : 
        eventArgs : CancelRoutedEventArgs -> unit 
override OnExpanding : 
        eventArgs : CancelRoutedEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Expander.cs#L211" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  CancelRoutedEventArgs</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Expander">Expander Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
