# ShutdownMode Property


Gets or sets the <a href="P_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_ShutdownMode">ShutdownMode</a>. This property indicates whether the application is shutdown explicitly or implicitly. If <a href="P_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_ShutdownMode">ShutdownMode</a> is set to OnExplicitShutdown the application is only closes if Shutdown is called. The default is OnLastWindowClose



## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public ShutdownMode ShutdownMode \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property ShutdownMode As ShutdownMode
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ShutdownMode : ShutdownMode with get, set
override ShutdownMode : ShutdownMode with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ApplicationLifetimes/ClassicDesktopStyleApplicationLifetime.cs#L38" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_ShutdownMode">ShutdownMode</a>  
The shutdown mode.

#### Implements
<a href="P_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_ShutdownMode">IClassicDesktopStyleApplicationLifetime.ShutdownMode</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime">ClassicDesktopStyleApplicationLifetime Class</a>  
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
