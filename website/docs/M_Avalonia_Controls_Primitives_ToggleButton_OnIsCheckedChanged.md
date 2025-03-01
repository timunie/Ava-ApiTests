import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnIsCheckedChanged Method


Called when <a href="P_Avalonia_Controls_Primitives_ToggleButton_IsChecked">IsChecked</a> changes.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnIsCheckedChanged(
	RoutedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnIsCheckedChanged ( 
	e As RoutedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnIsCheckedChanged : 
        e : RoutedEventArgs -> unit 
override OnIsCheckedChanged : 
        e : RoutedEventArgs -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  RoutedEventArgs</dt><dd>Event arguments for the routed event that is raised by the default implementation of this method.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_ToggleButton">ToggleButton Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
