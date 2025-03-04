import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Configure&lt;TApp&gt;(Func&lt;TApp&gt;) Method


Begin configuring an <a href="T_Avalonia_Application">Application</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static AppBuilder Configure<TApp>(
	Func<TApp> appFactory
)
where TApp : Application

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Configure(Of TApp As Application) ( 
	appFactory As Func(Of TApp)
) As AppBuilder
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Configure : 
        appFactory : Func<'TApp> -> AppBuilder  when 'TApp : Application
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/AppBuilder.cs#L114" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(TApp)</dt><dd>Factory function for <em>TApp</em>.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The subclass of <a href="T_Avalonia_Application">Application</a> to configure.</dd></dl>

#### Return Value
<a href="T_Avalonia_AppBuilder">AppBuilder</a>  
An <a href="T_Avalonia_AppBuilder">AppBuilder</a> instance.

## 
*appFactory* is useful for passing of dependencies to *TApp*.

## See Also


#### Reference
<a href="T_Avalonia_AppBuilder">AppBuilder Class</a>  
<a href="Overload_Avalonia_AppBuilder_Configure">Configure Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
