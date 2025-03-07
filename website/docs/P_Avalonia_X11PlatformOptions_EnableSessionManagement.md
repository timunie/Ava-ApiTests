# EnableSessionManagement Property


Determines whether to enable support for the X Session Management Protocol.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.X11 (in Avalonia.X11.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool EnableSessionManagement \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property EnableSessionManagement As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member EnableSessionManagement : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.X11/X11Platform.cs#L323" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>X Session Management Protocol is a standard implemented on most Linux systems that uses Xorg. This enables apps to control how they can control and/or cancel the pending shutdown requested by the user.

## See Also


#### Reference
<a href="T_Avalonia_X11PlatformOptions">X11PlatformOptions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
