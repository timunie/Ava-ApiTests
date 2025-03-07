# PlatformSettings Property


Represents a contract for accessing global platform-specific settings.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IPlatformSettings? PlatformSettings \{ get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property PlatformSettings As IPlatformSettings
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PlatformSettings : IPlatformSettings with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Application.cs#L207" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Platform_IPlatformSettings">IPlatformSettings</a>PlatformSettings can be null only if application wasn't initialized yet. <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>'s <a href="P_Avalonia_Controls_TopLevel_PlatformSettings">PlatformSettings</a> is an equivalent API which should always be preferred over a global one, as specific top levels might have different settings set-up.

## See Also


#### Reference
<a href="T_Avalonia_Application">Application Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
