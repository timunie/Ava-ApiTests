# Configure&lt;TApp&gt; Method


Begin configuring an <a href="T_Avalonia_Application">Application</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static AppBuilder Configure<TApp>()
where TApp : new(), Application

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Configure(Of TApp As {New, Application}) As AppBuilder
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Configure : unit -> AppBuilder  when 'TApp : new() and Application
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AppBuilder.cs#L98" title="View the source code">View Source</a>



#### Type Parameters
<dl><dt /><dd>The subclass of <a href="T_Avalonia_Application">Application</a> to configure.</dd></dl>

#### Return Value
<a href="T_Avalonia_AppBuilder">AppBuilder</a>  
An <a href="T_Avalonia_AppBuilder">AppBuilder</a> instance.

## See Also


#### Reference
<a href="T_Avalonia_AppBuilder">AppBuilder Class</a>  
<a href="Overload_Avalonia_AppBuilder_Configure">Configure Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

