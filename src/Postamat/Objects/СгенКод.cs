﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Postamat
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сген код.
    /// </summary>
    // *** Start programmer edit section *** (СгенКод CustomAttributes)

    // *** End programmer edit section *** (СгенКод CustomAttributes)
    [AutoAltered()]
    [Caption("Сген код")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СгенКодE", new string[] {
            "СгенКод as \'Сген код\'"}, Hidden=new string[] {
            "СгенКод"})]
    [View("СгенКодL", new string[] {
            "СгенКод as \'Сген код\'",
            "Пользователь.ФИО as \'ФИО\'"})]
    public class СгенКод : ICSSoft.STORMNET.DataObject
    {
        
        private int fСгенКод;
        
        private IIS.Postamat.Пользователь fПользователь;
        
        // *** Start programmer edit section *** (СгенКод CustomMembers)

        // *** End programmer edit section *** (СгенКод CustomMembers)

        
        /// <summary>
        /// СгенКод.
        /// </summary>
        // *** Start programmer edit section *** (СгенКод.СгенКод CustomAttributes)

        // *** End programmer edit section *** (СгенКод.СгенКод CustomAttributes)
        public virtual int СгенКод
        {
            get
            {
                // *** Start programmer edit section *** (СгенКод.СгенКод Get start)

                // *** End programmer edit section *** (СгенКод.СгенКод Get start)
                int result = this.fСгенКод;
                // *** Start programmer edit section *** (СгенКод.СгенКод Get end)

                // *** End programmer edit section *** (СгенКод.СгенКод Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СгенКод.СгенКод Set start)

                // *** End programmer edit section *** (СгенКод.СгенКод Set start)
                this.fСгенКод = value;
                // *** Start programmer edit section *** (СгенКод.СгенКод Set end)

                // *** End programmer edit section *** (СгенКод.СгенКод Set end)
            }
        }
        
        /// <summary>
        /// Сген код.
        /// </summary>
        // *** Start programmer edit section *** (СгенКод.Пользователь CustomAttributes)

        // *** End programmer edit section *** (СгенКод.Пользователь CustomAttributes)
        [PropertyStorage(new string[] {
                "Пользователь"})]
        [NotNull()]
        public virtual IIS.Postamat.Пользователь Пользователь
        {
            get
            {
                // *** Start programmer edit section *** (СгенКод.Пользователь Get start)

                // *** End programmer edit section *** (СгенКод.Пользователь Get start)
                IIS.Postamat.Пользователь result = this.fПользователь;
                // *** Start programmer edit section *** (СгенКод.Пользователь Get end)

                // *** End programmer edit section *** (СгенКод.Пользователь Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СгенКод.Пользователь Set start)

                // *** End programmer edit section *** (СгенКод.Пользователь Set start)
                this.fПользователь = value;
                // *** Start programmer edit section *** (СгенКод.Пользователь Set end)

                // *** End programmer edit section *** (СгенКод.Пользователь Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СгенКодE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СгенКодE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СгенКодE", typeof(IIS.Postamat.СгенКод));
                }
            }
            
            /// <summary>
            /// "СгенКодL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СгенКодL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СгенКодL", typeof(IIS.Postamat.СгенКод));
                }
            }
        }
    }
}
