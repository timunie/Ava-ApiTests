import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Configure&lt;TApp&gt; Method


Begin configuring an <a href="T_Avalonia_Application">Application</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

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
