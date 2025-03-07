# Resized Property


Gets or sets a method called when the toplevel is resized.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Action<Size, WindowResizeReason>? Resized \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Property Resized As Action(Of Size, WindowResizeReason)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Resized : Action<Size, WindowResizeReason> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/ITopLevelImpl.cs" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(<a href="T_Avalonia_Size">Size</a>, <a href="T_Avalonia_Controls_WindowResizeReason">WindowResizeReason</a>)

## See Also


#### Reference
<a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
