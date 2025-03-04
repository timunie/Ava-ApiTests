import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnClick Property


Gets an Action to be run when the notification is clicked.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Action? OnClick { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property OnClick As Action
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnClick : Action with get, set
override OnClick : Action with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Notifications/Notification.cs#L86" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>

#### Implements
<a href="P_Avalonia_Controls_Notifications_INotification_OnClick">INotification.OnClick</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Notifications_Notification">Notification Class</a>  
<a href="N_Avalonia_Controls_Notifications">Avalonia.Controls.Notifications Namespace</a>  
