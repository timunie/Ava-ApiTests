import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OwnerPropertyChanged Method




## Definition
**Namespace:** <a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OwnerPropertyChanged(
	Object? sender,
	AvaloniaPropertyChangedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OwnerPropertyChanged ( 
	sender As Object,
	e As AvaloniaPropertyChangedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OwnerPropertyChanged : 
        sender : Object * 
        e : AvaloniaPropertyChangedEventArgs -> unit 
override OwnerPropertyChanged : 
        sender : Object * 
        e : AvaloniaPropertyChangedEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Automation/Peers/SelectingItemsControlAutomationPeer.cs#L64" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  AvaloniaPropertyChangedEventArgs</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Automation_Peers_SelectingItemsControlAutomationPeer">SelectingItemsControlAutomationPeer Class</a>  
<a href="N_Avalonia_Automation_Peers">Avalonia.Automation.Peers Namespace</a>  
