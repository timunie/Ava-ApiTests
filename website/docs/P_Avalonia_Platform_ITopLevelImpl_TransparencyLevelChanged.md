# TransparencyLevelChanged Property


Gets or sets a method called when the toplevel's TransparencyLevel changes.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Action<WindowTransparencyLevel>? TransparencyLevelChanged \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Property TransparencyLevelChanged As Action(Of WindowTransparencyLevel)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TransparencyLevelChanged : Action<WindowTransparencyLevel> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/ITopLevelImpl.cs" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="T_Avalonia_Controls_WindowTransparencyLevel">WindowTransparencyLevel</a>)

## See Also


#### Reference
<a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
