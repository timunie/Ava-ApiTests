import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnSubmenuOpened Method


Called when a submenu opens somewhere in the menu.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnSubmenuOpened(
	RoutedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnSubmenuOpened ( 
	e As RoutedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnSubmenuOpened : 
        e : RoutedEventArgs -> unit 
override OnSubmenuOpened : 
        e : RoutedEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/MenuBase.cs#L175" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  RoutedEventArgs</dt><dd>The event args.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_MenuBase">MenuBase Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
