import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# DefaultMenuInteractionHandler(Boolean, IInputManager, Action&lt;Action, TimeSpan&gt;) Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Platform_DefaultMenuInteractionHandler">DefaultMenuInteractionHandler</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DefaultMenuInteractionHandler(
	bool isContextMenu,
	IInputManager? inputManager,
	Action<Action, TimeSpan> delayRun
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	isContextMenu As Boolean,
	inputManager As IInputManager,
	delayRun As Action(Of Action, TimeSpan)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        isContextMenu : bool * 
        inputManager : IInputManager * 
        delayRun : Action<Action, TimeSpan> -> DefaultMenuInteractionHandler
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Platform/DefaultMenuInteractionHandler.cs#L32" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd> </dd><dt>  IInputManager</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a>, <a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a>)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Platform_DefaultMenuInteractionHandler">DefaultMenuInteractionHandler Class</a>  
<a href="Overload_Avalonia_Controls_Platform_DefaultMenuInteractionHandler__ctor">DefaultMenuInteractionHandler Overload</a>  
<a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform Namespace</a>  
